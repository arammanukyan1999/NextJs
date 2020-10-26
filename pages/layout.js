import React from 'react'
import styles from './layout.module.css'



class Page extends React.Component {
    static async getInitialProps(ctx) {
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        const json = await res.json()

        return {
            post: json
        }
    }
    render() {
        return (
            
            <div>
                {this.props.post.map((item, index) => (
                    <div className={styles.container} key={index}>
                        <h3>{item.id}</h3>
                        <h2>{item.phone}</h2>
                        <h1>{item.company.name}</h1>
                    </div>
                ))}
            </div>
        )
        
    }
    
}

export default Page