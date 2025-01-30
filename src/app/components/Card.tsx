/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';

export default function Card({ src, title }: { src: string, title: string }) {
    return (
        <div className='text-center items-center'>
            <img src={src} alt={title} width={100} height={100} className='rounded-full items-center' />
            <h1>{title}</h1>
            <div><Link href='#'>Click!</Link></div>
        </div>
    );
}