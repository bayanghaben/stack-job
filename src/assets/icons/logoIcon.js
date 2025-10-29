import React from 'react'

function LogoIcon() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='46'
      height='46'
      viewBox='0 0 96 96'
      role='img'
      aria-labelledby='title desc'
    >
      <title id='title'>StackJobs icon</title>
      <desc id='desc'>
        Stacked bars and briefcase with check mark in #6366f1 and white,
        designed for dark backgrounds.
      </desc>

      <g transform='translate(12,16)'>
        <rect x='4' y='0' width='60' height='12' rx='3' fill='#6366f1' />
        <rect
          x='10'
          y='16'
          width='54'
          height='12'
          rx='3'
          fill='#6366f1'
          opacity='0.95'
        />
        <rect
          x='16'
          y='32'
          width='48'
          height='12'
          rx='3'
          fill='#6366f1'
          opacity='0.9'
        />
      </g>

      <rect x='32' y='10' width='24' height='8' rx='2' fill='#6366f1' />

      <path
        d='M40 32 L46 38 L58 22'
        fill='none'
        stroke='#ffffff'
        strokeWidth='3'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export default LogoIcon
