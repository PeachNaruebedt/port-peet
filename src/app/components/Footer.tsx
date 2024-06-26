import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="footer relative border-t bg-[#0d1224] border-[#353951] text-white">
    <div className="container p-12 flex lex-col md:flex-row items-center justify-between mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] py-6 lg:py-10">
    <p className="text-sm">
            © Developer Portfolio by <Link target="_blank" href="https://www.linkedin.com/feed/" className="text-[#16f2b3]">Peace Neon</Link>
          </p>
          <div className="flex items-center gap-5">
          <p className="text-sm">
            </p>
          </div>
    </div>
  </footer>
  )
}

export default Footer
