import React, { useState } from 'react';
import Modal from 'react-modal';
import * as S from './styles'; // Seus styled-components
import { apiLogin, register } from '../../services/api'; // Suas funções de requisição
import { customStyles } from './styles'; // Seu estilo para o modal
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

const LoginForm = () => {
    const { login } = useAuth()
    const navigate = useNavigate()

    // Estado para os campos de login
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // Estado para os campos de cadastro
    const [regUsername, setRegUsername] = useState('');
    const [regEmail, setRegEmail] = useState('');
    const [regPassword, setRegPassword] = useState('');
    const [regPassword2, setRegPassword2] = useState('');

    // Estado para o modal
    const [modalIsOpen, setModalIsOpen] = useState(false);

    // Funções para abrir/fechar o modal
    const openModal = () => setModalIsOpen(true);
    const closeModal = () => setModalIsOpen(false);

    // --- HANDLERS ---
    
    // Handler para o envio do formulário de login
    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const data = await apiLogin({ username, password });
            console.log('Login bem-sucedido:', data);

            login(data.token)
            navigate('/')
        } catch (error) {
            console.error('Erro no login:', error);
            alert('Falha no login. Verifique seu usuário e senha.');
        }
    };

    // Handler para o envio do formulário de cadastro
    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        if (regPassword !== regPassword2) {
            alert('As senhas não coincidem!');
            return;
        }

        try {
            const data = await register({ 
                username: regUsername, 
                email: regEmail, 
                password: regPassword,
                password2: regPassword2
            });
            console.log('Cadastro bem-sucedido:', data);
            alert('Cadastro realizado com sucesso! Faça login para continuar.');
            closeModal();
            // Limpar os campos do formulário de cadastro
            setRegUsername('');
            setRegEmail('');
            setRegPassword('');
            setRegPassword2('');
        } catch (error) {
            console.error('Erro no cadastro:', error);
            alert('Falha no cadastro. Verifique os dados ou tente novamente.');
        }
    };

    return (
        <>
            {/* Modal de Cadastro */}
            <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles}>
                <S.ModalContainer>
                    <h2>Inscreva-se agora</h2>
                    <S.Form onSubmit={handleRegister}>
                        <S.Input 
                            required 
                            type='text' 
                            placeholder='Nome do Usuário'
                            value={regUsername}
                            onChange={(e) => setRegUsername(e.target.value)}
                        />
                        <S.Input 
                            required 
                            type='email' 
                            placeholder='Email do Usuário'
                            value={regEmail}
                            onChange={(e) => setRegEmail(e.target.value)}
                        />
                        <S.Input 
                            required 
                            type='password' 
                            placeholder='Senha do Usuário'
                            value={regPassword}
                            onChange={(e) => setRegPassword(e.target.value)}
                        />
                        <S.Input 
                            required 
                            type='password' 
                            placeholder='Repita a Senha'
                            value={regPassword2}
                            onChange={(e) => setRegPassword2(e.target.value)}
                        />
                        <S.LoginButton type='submit'>Cadastrar-se</S.LoginButton>
                    </S.Form>
                </S.ModalContainer>
            </Modal>

            {/* Página de Login */}
            <S.LoginContainer>
                <div>
                    <S.LogoText>Teste</S.LogoText>
                </div>
                <div>
                    <S.Title>Acontecendo Agora</S.Title>
                    <h2>Faça Login</h2>
                    <S.Form onSubmit={handleLogin}>
                        <S.Input 
                            type="text" 
                            placeholder="Nome do Usuário"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <S.Input 
                            type="password" 
                            placeholder="Senha do Usuário"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <S.LoginButton type="submit">Entrar</S.LoginButton>
                    </S.Form>
                    <p onClick={openModal}>Não tem conta? Registre-se agora!</p>
                </div>
            </S.LoginContainer>
        </>
    );
};

export default LoginForm;