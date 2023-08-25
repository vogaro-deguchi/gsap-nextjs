'use client'

import React, { useRef, useLayoutEffect } from 'react'
import {gsap} from 'gsap'

export default function Gsap() {
  const textRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    gsap.to(textRef.current, {
      x: '20%',
      color: 'red',
    });
  }, [])
  return <div ref={textRef}>じーさっぷ</div>;
}

