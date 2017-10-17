import React from 'react'

const style = {
    backgroundColor: '#282828',
    borderTop: '0.1rem solid #E7E7E7',
    textAlign: 'right',
    padding: '1rem',
    position: 'fixed',
    left: '0',
    bottom: '0',
    height: '8rem',
    width: '100%'
}

const phantom = {
    display: 'flex',
    padding: '1rem',
    height: '8rem',
    width: '100%'
}

const FooterWrapper = ({ children }) => (
    <div>
        <div style={phantom} />
        <div style={style}>
            {children}
        </div>
    </div>
)

export default FooterWrapper
