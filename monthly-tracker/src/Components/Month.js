import React from "react";
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
class Month extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeDates: [],
            activeMonth: "",
            active: true,
        }
    }

    handleClose = () => {
        this.props = "";
        this.setState({
            activeDates: [],
            activeMonth: "",
            active: false,
        })

    }
    handleClick = (e) => {
        console.log(e.target.innerText);
        if (this.state.activeDates.includes(e.target.innerText)) {
            this.setState((prevState) => ({
                activeDates: prevState.activeDates.filter((d) => d !== e.target.innerText)
            }))

        } else {
            this.setState((prevState) => ({


                activeDates: prevState.activeDates.concat(e.target.innerText),
                //activeMonth:prevState.activeMonth= months[new Date().getMonth()],


            }), () => console.log(this.state.activeDates, 'updated'))
            console.log(this.state.activeDates, 'in handleclick');
        }
    }

    render() {
        console.log('rendered');
       
        // console.log(this.state.activeDates.includes(1));
        var now = new Date();
        var days = [];
        for (let i = 0; i < new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate(); i++) {
            days[i] = i + 1;
        }
        const { activeDates } = this.state;

        return (
            <>
                {
                    this.state.active ? <div className="month container">

                        <div className="month-name">
                            <h2>{this.props.activity}</h2>
                            <span>{months[new Date().getMonth()]}</span>

                        </div>
                        <div className="days">
                            {

                                days.map((d, i) => {
                                    return <button className={activeDates.includes(String(i + 1)) ? "active" : ""} key={i} onClick={(e) => this.handleClick(e)}  >{d}</button>
                                })


                            }

                        </div>
                        <div className="close"> <small onClick={this.handleClose}>❌</small></div>
                    </div> : <></>
                }

            </>
        )
    }
}

export default Month;