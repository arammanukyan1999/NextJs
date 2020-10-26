import React,{useState} from 'react'
import styles from './form.module.css'


class Page extends React.Component {
      
          state={
              title:'',
              email:'',
              area:''


          }

        handleChangeTitle = (e)=>{
            this.setState({
                title:e.target.value
            })
        }
        

        handleChangeEmail = (e)=>{
            this.setState({
                email:e.target.value
            })
        }

        handleChangeArea = (e)=>{
            this.setState({
                area:e.target.value
            })
        }
      
        
    render() {
        return (
            <div className={styles.form}>
                <form onSubmit={(e)=>{e.preventDefault(),console.log(this.state)}}>
               <input className={styles.input} onChange={this.handleChangeTitle} type="text" placeholder="title"></input>
               <br></br>
               <input className={styles.input} onChange={this.handleChangeEmail} type="email" placeholder="email"></input>
               <br></br>
               <textarea className={styles.textarea} onChange={this.handleChangeArea} name="textarea" placeholder="tipe"></textarea>
              <br></br>
               <button className={styles.submit}> Submit</button>
           </form>
            </div>
         
        )
        
    }
    
}

export default Page