import { expect, test } from 'vitest'
import fs from 'fs'
import path from 'path'

test('static HTML file exists and contains required elements', () => {
    // Read the HTML file
    const htmlPath = path.join(__dirname, '../static/assets/index.html')
    const html = fs.readFileSync(htmlPath, 'utf-8')

    // Basic checks
    expect(html).toContain('<!doctype html>')
    expect(html).toContain('<form id="corsTestForm">')
    expect(html).toContain('<div id="responseOutput">')
}) 