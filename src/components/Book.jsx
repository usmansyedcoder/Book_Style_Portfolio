import { useState, useCallback, useEffect, useRef } from 'react'
import styles from './Book.module.css'

/**
 * Book — renders two visible pages and animates a 3-D page flip between spreads.
 *
 * Props
 *   pages      – array of React elements, one per page
 *   pageLabels – array of string labels for the TOC tabs
 */
export default function Book({ pages, pageLabels }) {
  const totalPages   = pages.length           // e.g. 4
  const maxSpread    = totalPages - 2          // last left-page index = 2
  const [spread, setSpread]   = useState(0)   // index of the LEFT page currently shown
  const [flipping, setFlipping] = useState(null) // 'next' | 'prev' | null
  const animRef = useRef(false)

  /* ── flip forward ── */
  const flipNext = useCallback(() => {
    if (animRef.current || spread >= maxSpread) return
    animRef.current = true
    setFlipping('next')
    setTimeout(() => {
      setSpread(s => s + 1)
      setFlipping(null)
      animRef.current = false
    }, 850)
  }, [spread, maxSpread])

  /* ── flip backward ── */
  const flipPrev = useCallback(() => {
    if (animRef.current || spread <= 0) return
    animRef.current = true
    setFlipping('prev')
    setTimeout(() => {
      setSpread(s => s - 1)
      setFlipping(null)
      animRef.current = false
    }, 850)
  }, [spread])

  /* ── jump to a specific page (from TOC) ── */
  const goTo = useCallback((target) => {
    if (animRef.current || target === spread) return
    if (target > spread) flipNext()
    else flipPrev()
    // For multi-step jumps we chain via a small delay
    const diff = Math.abs(target - spread)
    if (diff > 1) {
      const interval = setInterval(() => {
        setSpread(cur => {
          const next = target > cur ? cur + 1 : cur - 1
          if (next === target) clearInterval(interval)
          return next
        })
      }, 900)
    }
  }, [spread, flipNext, flipPrev])

  /* ── keyboard ── */
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight') flipNext()
      if (e.key === 'ArrowLeft')  flipPrev()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [flipNext, flipPrev])

  const leftPage  = pages[spread]
  const rightPage = pages[spread + 1]

  /* Page being flipped away / revealed */
  const flipAwayPage   = flipping === 'next' ? rightPage : leftPage
  const flipRevealPage = flipping === 'next' ? pages[spread + 2] : pages[spread - 1]

  return (
    <>
      {/* TABLE OF CONTENTS */}
      <nav className={styles.toc} aria-label="Table of contents">
        {pageLabels.map((label, i) => (
          <button
            key={label}
            className={`${styles.tocBtn} ${i === spread ? styles.tocActive : ''}`}
            onClick={() => goTo(i)}
            aria-current={i === spread ? 'page' : undefined}
          >
            {label}
          </button>
        ))}
      </nav>

      {/* BOOK */}
      <div className={styles.scene} role="main" aria-label="Portfolio book">
        {/* Static left page */}
        <div className={`${styles.staticPage} ${styles.left}`}>
          {flipping === 'prev' ? flipRevealPage : leftPage}
          <span className={styles.pageNum} style={{ left: 36 }}>{spread + 1}</span>
        </div>

        {/* Static right page */}
        <div className={`${styles.staticPage} ${styles.right}`}>
          {flipping === 'next' ? flipRevealPage : rightPage}
          <span className={styles.pageNum} style={{ right: 36 }}>{spread + 2}</span>
        </div>

        {/* Spine */}
        <div className={styles.spine} aria-hidden="true" />

        {/* Flipping leaf */}
        {flipping && (
          <div
            className={`
              ${styles.flipLeaf}
              ${flipping === 'next' ? styles.flipNext : styles.flipPrev}
            `}
            aria-hidden="true"
          >
            <div className={styles.flipFront}>{flipAwayPage}</div>
            <div className={styles.flipBack}>{flipRevealPage}</div>
          </div>
        )}

        {/* Ground shadow */}
        <div className={styles.shadow} aria-hidden="true" />

        {/* Turn arrows */}
        {spread > 0 && (
          <button
            className={`${styles.arrow} ${styles.arrowPrev}`}
            onClick={flipPrev}
            aria-label="Previous page"
          >‹</button>
        )}
        {spread < maxSpread && (
          <button
            className={`${styles.arrow} ${styles.arrowNext}`}
            onClick={flipNext}
            aria-label="Next page"
          >›</button>
        )}
      </div>

      <p className={styles.hint} aria-hidden="true">
        Use arrow keys or click ‹ › to turn pages
      </p>
    </>
  )
}
