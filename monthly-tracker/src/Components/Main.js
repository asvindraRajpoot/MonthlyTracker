import React  from "react";
import Month from './Month';

class Main extends React.Component{
    constructor(props){
        super(props);
        this.state={
            active:false,
            activity:[],
            
        }
    }

//    handleChange=({target})=>{
//        this.setState((prevState)=>{
//         return {
          
            
//            }
//        })


//    }

     handleClear=(event)=>{
         event.target.reset();

     }

    handleSubmit=(e)=>{
        e.preventDefault();
        console.log(e.target.elements.activity);
        if(e.target.elements.activity.value){
        this.setState((prevState)=>{
            return {
                active:true,
                activity:[...this.state.activity,e.target.elements.activity.value],
                
            }
           
        },()=>{

           
            console.log('state is updated');
        })
        setTimeout(()=>{
            this.handleClear(e);
        },1);
       
       
       

    }else{
        e.target.reset();

    }

}



    render(){
        console.log(this.state.activity);
       
        return (
            <>
              <div className="form-control">
                  <form  onSubmit={this.handleSubmit}>
                      <input type="text" placeholder="e.g. coding" name="activity"/>
                      <input type="submit" value="Add Activity"/>
                  </form>
              </div>
              {
                  this.state.active?this.state.activity.map((elm,i)=>{
                      return <Month activity={elm} key={i}/>
                  }):<></>
              }
            </>
        )
    }


}

export default Main;