import React from 'react'
import GitHubButton from 'react-github-btn'


/////We use here functional component, because everything here is static and/
//// stateless component
export default function Header() {
    return (
        <div style={{textAlign: 'center'}}>
            <h1>Search Emoji &#x1F984;</h1>
            <p>A simple emoji search tool made with ReactJS</p>
            <p>
                <GitHubButton href="https://github.com/magdasokolovic" data-icon="opticon-star" data-text="Star" data-show-count={true} data-size="large"></GitHubButton>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <GitHubButton href="https://github.com/magdasokolovic" data-icon="octicon-repo-forked" data-text="Fork" data-show-count={true} data-size="large"></GitHubButton>

            </p>
        </div>
    )
}
