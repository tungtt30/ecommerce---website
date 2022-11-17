import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

const Helmet = props => {
    document.title = 'GodCloser - ' + props.title

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }, [])

    return (
        <div>
            {props.children}
        </div>
    )
}

Helmet.propTypes = {
    title: PropTypes.string.isRequired
}

export default Helmet