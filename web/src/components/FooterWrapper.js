import React from 'react'

/**
 * Define local CSS for this Component.
 */
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

/**
 * Define FooterWrapper as a 'dumb' Component.
 * Because the Component doesn't have any built in logic,
 * it is only defined as a function which returns JSX.
 */
const FooterWrapper = ({ children }) => (
    <div>
        <div style={phantom} />
        <div style={style}>
            {children}
        </div>
    </div>
)

export default FooterWrapper
