
import styled from "styled-components";
import logo from "../../Images/logo.png";
import Input from "../Input";
import Button from "../Button";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import UserContext from "../Context/UserContext";

export default function Login({ enabled, setEnabled }) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { setUser, setToken } = useContext(UserContext);

    function handleLogin(e) {
        e.preventDefault();

        if (!email || !password) {

            alert("Preencha os dados corretamente e tente novamente");

        } else {

            setEnabled(false);

            const promisse = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login', {
                email,
                password
            });

            promisse.then(response => {

                setEnabled(true);
                setUser(response.data);
                setToken(response.data.token);
                navigate('/hoje');

            });

            promisse.catch(error => {

                alert('Email ou senha inválido(s). Tente novamente.');
                setEnabled(true);
                setEmail('');
                setPassword('');

            })
        }
    }

    return (
        <>
            <Container>

                <img src={logo} alt="Trackit" />

                <FormLogin>

                    <form onSubmit={handleLogin}>
                        <Input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="email"
                            disabled={!enabled}
                        />
                        <Input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="senha"
                            disabled={!enabled}
                        />
                        <Button type="submit" disabled={!enabled} >
                            {enabled ? "Entrar" : <Loader type="ThreeDots" color="#FFF" height={18} width={55} />}
                        </Button>
                    </form>

                </FormLogin>

                <StyledLink to="/cadastro">Não tem uma conta? Cadastre-se!</StyledLink>

            </Container>
        </>
    )

}

const Container = styled.div`

    width: 100%;
    height: 667px;
    padding: 68px 36px 0 36px;

    background-color: #fff;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    
    img {

        width: 180px;
        height: 179px;
        margin-bottom: 32px;
    } 

`

const FormLogin = styled.div`

    display:flex;
    flex-direction: column;
    align-items: center;
    
    height: auto;

`

const StyledLink = styled(Link)`

    margin-top: 25px;

    font-size: 14px;
    font-weight: 400;
    text-align: center;

    color: #52B6FF;

`