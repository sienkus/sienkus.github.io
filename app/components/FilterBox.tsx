"use client"

import React, { useState } from 'react'

interface FilterBoxProps {
  onFilter: (filters: { search: string; domain: string; duration: string }) => void
}

const FilterBox: React.FC<FilterBoxProps> = ({ onFilter }) => {
  const [search, setSearch] = useState('')
  const [domain, setDomain] = useState('')
  const [duration, setDuration] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onFilter({ search, domain, duration })
  }

  return (
    <div className="bg-[var(--color-navy)] text-[var(--color-background)] p-6 rounded-3xl shadow-lg w-full max-w-sm">
      {/* <h2 className="text-xl font-montserrat font-bold mb-4">Filter Projects</h2> */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="search" className="font-montserrat block text-sm font-medium mb-1">search</label>
          <input
            type="text"
            id="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="font-montserrat w-full px-3 py-2 bg-white text-[var(--color-navy)] rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--color-turquoise)]"
            placeholder="search projects..."
          />
        </div>
        <div>
          <label htmlFor="domain" className="font-montserrat block text-sm font-medium mb-1">domain</label>
          <div className="relative">
            <select
              id="domain"
              value={domain}
              onChange={(e) => setDomain(e.target.value)}
              className="font-montserrat w-full px-3 py-2 bg-[var(--color-background)] text-[var(--color-navy)] rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--color-turquoise)] appearance-none pr-8"
            >
              <option value="">all domains</option>
              <option value="web">web development</option>
              <option value="mobile">mobile apps</option>
              <option value="data">data science</option>
              <option value="ai">ai/ml</option>
            </select>
            <span className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none text-gray-900">
              ▼
            </span>
          </div>
        </div>
        <div>
          <label htmlFor="duration" className="font-montserrat block text-sm font-medium mb-1">duration</label>
          <div className="relative">
            <select
              id="duration"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="font-montserrat w-full px-3 py-2 bg-[var(--color-background)] text-[var(--color-navy)] rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--color-turquoise)] appearance-none pr-8"
            >
              <option value="">any duration</option>
              <option value="short">short (1-3 months)</option>
              <option value="medium">medium (3-6 months)</option>
              <option value="long">long (6+ months)</option>
            </select>
            <span className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none text-gray-900">
              ▼
            </span>
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-[var(--color-turquoise)] text-[var(--color-background)] py-2 px-4 rounded-2xl hover:opacity-90 transition-opacity duration-300 font-montserrat"
        >
          apply filters
        </button>
      </form>
    </div>
  )
}

export default FilterBox
