import { useState } from 'react'
import './Styles.css'
import QRCode from "react-qr-code"

export default function QRCodeGen(){

    const [qrCode, setQRCode] = useState('')
    const [Input, setInput] = useState('')
    const [copyMessage, setCopyMessage] = useState('')

    function handleQRCodeGen(){
        const trimmedValue = Input.trim()
        if (!trimmedValue) return
        setQRCode(trimmedValue)
    }

    async function handleCopy(){
        if (!qrCode) return
        try {
            await navigator.clipboard.writeText(qrCode)
            setCopyMessage('Copied to clipboard!')
        } catch (error) {
            setCopyMessage('Unable to copy. Try again.')
        }
    }

    function handleInputKeyDown(event){
        if (event.key === 'Enter' && Input.trim()) {
            handleQRCodeGen()
        }
    }

    function handleClear(){
        setQRCode('')
        setCopyMessage('')
    }

    return(
        <div className="container">
            <div className="card">
                <h2>QR Code Generator</h2>
                <p className="subtitle">Type a URL or text below, then generate a responsive QR code instantly.</p>
                <div className="input-group">
                    <input
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleInputKeyDown}
                        value={Input}
                        type="text"
                        name="qr-code"
                        placeholder="Enter URL or text"
                        aria-label="QR code input"
                    />
                    <button
                        disabled={!Input.trim()}
                        onClick={handleQRCodeGen}
                        className="primary-btn"
                    >
                        Generate
                    </button>
                </div>
                <div className="actions-row">
                    {qrCode && (
                        <>
                            <button className="secondary-btn" onClick={handleCopy}>Copy Text</button>
                            <button className="secondary-btn" onClick={handleClear}>Clear</button>
                        </>
                    )}
                </div>
                {copyMessage && <div className="status-text">{copyMessage}</div>}
                <div className="qr-box">
                    {qrCode ? (
                        <QRCode
                            id="qr-code"
                            value={qrCode}
                            size={320}
                            bgColor="#fff"
                        />
                    ) : (
                        <div className="qr-placeholder">
                            Your generated QR code will appear here after clicking Generate.
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

