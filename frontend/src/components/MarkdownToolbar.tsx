// frontend/src/components/MarkdownToolbar.tsx
import React from 'react'
import { ToolbarProps } from '../types'
import Dropdown, { DropdownItem } from './Dropdown'
// 我們可以直接使用 Dropdown Item，不需要 Button 元件，因為 Dropdown 內部處理了樣式

export default function MarkdownToolbar({ 
  onSimpleInsert, 
  onSmartBlock, 
  onSmartInline,
  onRequestTable,
  onRequestSuperscript, 
  onRequestSubscript,  
  onRequestMatrix,
}: ToolbarProps) {

  return (
    <div className="flex flex-wrap items-center gap-2">
      <Dropdown label="Text Style">
        <DropdownItem onClick={() => onSmartInline('**', 'bold text')}>Bold</DropdownItem>
        <DropdownItem onClick={() => onSmartInline('*', 'italic text')}>Italic</DropdownItem>
        <DropdownItem onClick={() => onSmartInline('~~', 'strikethrough')}>Strikethrough</DropdownItem>
        <DropdownItem onClick={() => onSmartInline('`', 'code')}>Inline Code</DropdownItem>
        <DropdownItem onClick={() => onSimpleInsert('<kbd>', '</kbd>', 'Ctrl')}>Keyboard &lt;kbd&gt;</DropdownItem>
        <DropdownItem onClick={() => onSimpleInsert('<mark>', '</mark>', 'highlight')}>Highlight &lt;mark&gt;</DropdownItem>
      </Dropdown>

      <Dropdown label="Heading">
        <DropdownItem onClick={() => onSmartBlock('# ', 'heading')}>Heading 1</DropdownItem>
        <DropdownItem onClick={() => onSmartBlock('## ', 'heading')}>Heading 2</DropdownItem>
        <DropdownItem onClick={() => onSmartBlock('### ', 'heading')}>Heading 3</DropdownItem>
      </Dropdown>
      
      <Dropdown label="Lists">
        <DropdownItem onClick={() => onSmartBlock('* ', 'list')}>Bullet List</DropdownItem>
        <DropdownItem onClick={() => onSmartBlock('1. ', 'list')}>Numbered List</DropdownItem>
        <DropdownItem onClick={() => onSmartBlock('* [ ] ', 'task')}>Task List</DropdownItem>
        <DropdownItem onClick={() => onSmartBlock('> ', 'quote')}>Blockquote</DropdownItem>
      </Dropdown>

      <Dropdown label="Insert">
        <DropdownItem onClick={() => onSimpleInsert('[', '](https://)', 'link text')}>Link</DropdownItem>
        <DropdownItem onClick={() => onSimpleInsert('![', '](image-url)', 'alt text')}>Image</DropdownItem>
        <DropdownItem onClick={onRequestTable}>Table</DropdownItem>
        <DropdownItem onClick={() => onSimpleInsert('\n---\n', '', '')}>Divider</DropdownItem>
        <DropdownItem onClick={() => onSimpleInsert('```javascript\n', '\n```', '// code')}>Code Block</DropdownItem>
      </Dropdown>

      <Dropdown label="Math">
        <DropdownItem onClick={() => onSimpleInsert('$', '$', 'E = mc^2')}>Inline Math</DropdownItem>
        <DropdownItem onClick={() => onSimpleInsert('$$\n', '\n$$', 'f(x) = ...')}>Block Math</DropdownItem>
        <DropdownItem onClick={onRequestSuperscript}>Superscript</DropdownItem>
        <DropdownItem onClick={onRequestSubscript}>Subscript</DropdownItem>
        <DropdownItem onClick={() => onSimpleInsert('$\\frac{', '}{denominator}$', 'numerator')}>Fraction</DropdownItem>
        <DropdownItem onClick={() => onSimpleInsert('$\\sqrt{', '}$', 'x')}>Square Root</DropdownItem>
        <DropdownItem onClick={onRequestMatrix}>Matrix Env</DropdownItem>
      </Dropdown>
    </div>
  )
}