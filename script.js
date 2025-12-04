// Validação e tratamento do formulário de login
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    
    // Validação em tempo real do email
    emailInput.addEventListener('blur', function() {
        validateEmail(this);
    });
    
    // Validação em tempo real da senha
    passwordInput.addEventListener('blur', function() {
        validatePassword(this);
    });
    
    // Submissão do formulário
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = emailInput.value.trim();
        const password = passwordInput.value;
        const remember = document.getElementById('remember').checked;
        
        // Validação final
        if (!validateEmail(emailInput) || !validatePassword(passwordInput)) {
            return;
        }
        
        // Simulação de login (substitua por sua lógica de autenticação)
        handleLogin(email, password, remember);
    });
    
    function validateEmail(input) {
        const email = input.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (!email) {
            showError(input, 'E-mail é obrigatório');
            return false;
        }
        
        if (!emailRegex.test(email)) {
            showError(input, 'E-mail inválido');
            return false;
        }
        
        showSuccess(input);
        return true;
    }
    
    function validatePassword(input) {
        const password = input.value;
        
        if (!password) {
            showError(input, 'Senha é obrigatória');
            return false;
        }
        
        if (password.length < 6) {
            showError(input, 'Senha deve ter no mínimo 6 caracteres');
            return false;
        }
        
        showSuccess(input);
        return true;
    }
    
    function showError(input, message) {
        input.style.borderColor = '#e74c3c';
        removeErrorMessage(input);
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.textContent = message;
        errorDiv.style.color = '#e74c3c';
        errorDiv.style.fontSize = '12px';
        errorDiv.style.marginTop = '4px';
        input.parentElement.appendChild(errorDiv);
    }
    
    function showSuccess(input) {
        input.style.borderColor = '#27ae60';
        removeErrorMessage(input);
    }
    
    function removeErrorMessage(input) {
        const errorMessage = input.parentElement.querySelector('.error-message');
        if (errorMessage) {
            errorMessage.remove();
        }
    }
    
    function handleLogin(email, password, remember) {
        // Mostrar feedback visual
        const loginButton = document.querySelector('.login-button');
        const originalText = loginButton.textContent;
        loginButton.textContent = 'Entrando...';
        loginButton.disabled = true;
        
        // Simulação de requisição (substitua por sua API real)
        setTimeout(() => {
            // Aqui você faria a chamada para sua API de autenticação
            console.log('Tentativa de login:', { email, password, remember });
            
            // Exemplo de feedback
            alert('Login realizado com sucesso! (Esta é uma demonstração)');
            
            // Resetar botão
            loginButton.textContent = originalText;
            loginButton.disabled = false;
            
            // Se o login for bem-sucedido, redirecione:
            // window.location.href = '/dashboard.html';
        }, 1000);
    }
});

