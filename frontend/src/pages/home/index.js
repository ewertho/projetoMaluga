import React,{Component} from 'react'
import api from '../../services/api'
import {Card,Form, Dropdown, DropdownButton,Button} from 'react-bootstrap'
import './style.css'
import DropdownItem from 'react-bootstrap/DropdownItem'


class Home extends Component {

    state = {
        data: "",
        vlan: "",
        error:"",
        list:[],
        resposta:{}
    }
    
    componentDidMount(){
        api.get("/index").then(resp=>{
            this.setState({list: resp.data})
        })
    }


    procurar= async e =>{
        const {data, vlan} = this.state

        if (!data || !vlan) {
            this.setState({error:"Dados incorretos"})
            
        } else {
            try {
                const dataCorreta = Date(this.state.data) 
                await api.post("/procurar", {dataCorreta,vlan}).then(resp=>this.setState({resposta: resp.data}))
              
            } catch (err) {
                this.setState({
                    error:
                    "Houve um problema com o login, verifique suas credenciais. T.T"
                });
            }
        }
    }

    render(){
        return(
            <div className="container">
                <Card className="box" style={{ width: '18rem'}}>
                    <Card.Body style={{alignContent: 'center'}}>
                        <Card.Title style={{textAlign: "center"}}>Pesquisa</Card.Title>
                        <Form onSubmit={this.procurar}>
                            {this.state.error && <p>{this.state.error}</p>}
                            
                            <Form.Control placeholder='data' type='date' onChange={e => this.setState({ data: e.target.value })}/>
                            <br></br>
                            <Form.Control placeholder='vlan' type='text' onChange={e => this.setState({ vlan: e.target.value })}/>
                            <DropdownButton id="dropdown-basic-button" title="Dropdown button">
                                {this.state.list.forEach((value, index)=>{
                                    return <DropdownItem>{value}</DropdownItem>
                                })}
                                
                            </DropdownButton>
                            <br></br>
                            <Button variant='primary' type='submit' style={{textAlign: "center"}}>Procurar</Button>
                        </Form>
                    </Card.Body>
                </Card>
                {<p>{this.state.list}</p>}
            </div>
        )
    }
}

export default Home