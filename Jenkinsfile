pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Construindo o projeto...'
                npm install
            }
        }
        stage('Test') {
            steps {
                echo 'Executando testes...'
                npm test
            }
        }
        stage('Deploy') {
            steps {
                echo 'Implantando...'
                
            }
        }
    }

    post {
        success {
            echo 'Pipeline concluído com sucesso!'
        }
        failure {
            echo 'Pipeline falhou. Verifique os logs para detalhes.'
        }
    }
}
