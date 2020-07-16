import React from 'react'

export default class Header extends React.Component {
    state = {
        height: 0
    }

    setHeight = () => {
        this.setState({height: window.innerHeight - 62})
    }
    
    resizeEvent = null

    componentDidMount() {
        this.resizeEvent = window.addEventListener("resize", this.setHeight)
        this.setHeight()
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.setHeight)
    }

    render() {
        let { className, children } = this.props
        return (
            <div className={className} style={{height: `${this.state.height}px`, margin: 0}}>
                {children}
            </div>
        )
    }
}
