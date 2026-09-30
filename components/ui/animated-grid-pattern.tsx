'use client'

import React from 'react'
import { cn } from '@/lib/utils'

type AnimatedGridPatternProps = {
  width?: number
  height?: number
  x?: number
  y?: number
  strokeDasharray?: string
  numSquares?: number
  maxOpacity?: number
  duration?: number
  repeatDelay?: number
  className?: string
}

export function AnimatedGridPattern({
  width = 40,
  height = 40,
  x = -1,
  y = -1,
  strokeDasharray = '4 4',
  numSquares = 30,
  maxOpacity = 0.2,
  duration = 3,
  repeatDelay = 1,
  className,
}: AnimatedGridPatternProps) {
  const positions = [
    [0, 0],
    [4, 1],
    [8, 2],
    [2, 3],
    [6, 4],
    [9, 5],
    [1, 6],
    [5, 7],
    [8, 8],
    [3, 9],
    [7, 0],
    [0, 4],
    [4, 5],
    [9, 3],
    [2, 8],
    [6, 9],
    [1, 2],
    [5, 3],
    [8, 6],
    [3, 7],
    [7, 8],
    [0, 9],
    [4, 0],
    [9, 1],
    [2, 5],
    [6, 6],
    [1, 8],
    [5, 9],
    [8, 4],
    [3, 2],
  ]

  const squares = Array.from({ length: numSquares }, (_, index) => {
    const position = positions[index % positions.length]

    return {
      id: index,
      x: position[0] * width,
      y: position[1] * height,
    }
  })

  return (
    <svg
      aria-hidden="true"
      className={cn(
        'pointer-events-none absolute inset-0 h-full w-full',
        className
      )}
      width="100%"
      height="100%"
      viewBox="0 0 400 400"
      preserveAspectRatio="none"
    >
      <defs>
        <pattern
          id="animated-grid-pattern"
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path
            d={`M ${width} 0 L 0 0 0 ${height}`}
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray={strokeDasharray}
          />
        </pattern>
      </defs>

      <rect
        width="100%"
        height="100%"
        fill="url(#animated-grid-pattern)"
      />

      {squares.map((square) => (
        <rect
          key={square.id}
          x={square.x}
          y={square.y}
          width={width}
          height={height}
          fill="currentColor"
          opacity={maxOpacity}
          className="animate-pulse"
          style={{
            animationDuration: `${duration}s`,
            animationDelay: `${square.id * (repeatDelay / numSquares)}s`,
            animationIterationCount: 'infinite',
          }}
        />
      ))}
    </svg>
  )
}