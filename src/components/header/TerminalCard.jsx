// TerminalCard.js
import React from 'react';
import './TerminalCard.css';

const TerminalCard = ({ title, content }) => (
    <div className="terminal-card">
        <div className="terminal-header">
            <div className="terminal-buttons">
                <div className="terminal-close"></div>
                <div className="terminal-resize"></div>
                <div className="terminal-open"></div>
            </div>
        </div>
        <div className="terminal-content">
            <h2 className="text-2xl font-semibold mb-4">{title}</h2>
            <p>{content}</p>
        </div>
    </div>
);

export default TerminalCard;