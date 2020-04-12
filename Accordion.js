import React from 'react';
import './Accordion.css'

class Accordion extends React.Component {
    static defaultProps = { 
        sections: []
    };
    state = {
        activeSectionIndex: null,
    }
    renderItem(section, index, activeSectionIndex) {
        return (
            <li className="accordion-item" key={index}>
                <button type='button' onClick={() => this.handleActiveSection(index)}>
                    {section.title}
                </button>
                {(activeSectionIndex === index) &&<p>{section.content}</p>}
            </li>
        )
    }

    handleActiveSection = (index) => {
        this.setState({activeSectionIndex: index})
    }

    render() {
        return (
            <ul className="accordion">
                {this.props.sections.map((section, index) => 
                this.renderItem(section, index, this.state.activeSectionIndex))
                }
            </ul>
        )
    }
}

export default Accordion