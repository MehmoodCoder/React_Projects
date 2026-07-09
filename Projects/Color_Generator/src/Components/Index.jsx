import { useState, useEffect } from "react";

export default function ColorGen() {
    const [colorType, setColorType] = useState('hex');
    const [color, setColor] = useState('#212121');
    const [hoveredButton, setHoveredButton] = useState(null);

    function createRandomHEXColor() {
        const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
        let hexColor = "#";
        for (let i = 0; i < 6; i++) {
            hexColor += hex[Math.floor(Math.random() * hex.length)];
        }
        setColor(hexColor);
    }

    function createRandomRGBColor() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        setColor(`rgb(${r}, ${g}, ${b})`);
    }

    const getButtonStyle = (id) => ({ 
        padding: '12px 24px', 
        margin: '8px', 
        fontSize: '16px', 
        fontWeight: '600', 
        borderRadius: '8px', 
        border: 'none', 
        cursor: 'pointer', 
        backgroundColor: hoveredButton === id ? '#ffffff' : 'rgba(255, 255, 255, 0.2)', 
        color: hoveredButton === id ? '#121212' : '#ffffff', 
        backdropFilter: 'blur(10px)', 
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)', 
        transition: 'all 0.3s ease', 
        transform: hoveredButton === id ? 'scale(1.05)' : 'scale(1)' 
    });

    return (
        <div 
        className="container" 
        style={{ 
            width: '100%', 
            minHeight: '100vh', 
            background: color, 
            textAlign: 'center', 
            padding: '40px 20px', 
            boxSizing: 'border-box', 
            fontFamily: 'system-ui, sans-serif', 
            transition: 'background 0.5s ease', 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            overflowX: 'hidden' 
            }}>
            <div 
                style={{ 
                    display: 'flex', 
                    flexWrap: 'wrap', 
                    justifyContent: 'center', 
                    gap: '5px' 
                }}
            >
                <button 
                    style={getButtonStyle('hex')} 
                    onMouseEnter={() => setHoveredButton('hex')} 
                    onMouseLeave={() => setHoveredButton(null)} 
                    onClick={() => setColorType('hex')}
                >
                    HEX Format
                </button>
                <button 
                    style={getButtonStyle('rgb')} 
                    onMouseEnter={() => setHoveredButton('rgb')} 
                    onMouseLeave={() => setHoveredButton(null)} 
                    onClick={() => setColorType('rgb')}
                >
                    RGB Format
                </button>
                <button 
                    style={getButtonStyle('random')} 
                    onMouseEnter={() => setHoveredButton('random')} 
                    onMouseLeave={() => setHoveredButton(null)} 
                    onClick={colorType === 'hex' ? createRandomHEXColor : createRandomRGBColor}
                >
                        Generate Random Color
                </button>
            </div>
            <div 
                className="display" 
                style={{ 
                    display: 'flex', 
                    textAlign: 'center', 
                    justifyWindow: 'center', 
                    color: '#fff', 
                    marginTop: '12vh', 
                    flexDirection: 'column', 
                    gap: '20px', 
                    textShadow: '0px 4px 12px rgba(0,0,0,0.4)', 
                    padding: '0 10px' 
                }}
            >
                <h3 
                style={{ 
                    margin: 0, 
                    fontSize: '24px', 
                    letterSpacing: '2px', 
                    opacity: 0.8, 
                    textTransform: 'uppercase' 
                    }}
                >
                    Type : {colorType}
                </h3>
                <h1 
                style={{ 
                    margin: 0, 
                    fontSize: 'clamp(32px, 8vw, 72px)', 
                    fontWeight: '800', 
                    letterSpacing: '1px' 
                    }}
                >
                    {color}
                </h1>
            </div>
        </div>
    );
}
