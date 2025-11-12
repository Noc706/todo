pipeline {
    agent any
    environment {
        DOCKER_COMPOSE = 'docker compose'
    }
    stages {
        stage('Debug') {
            steps {
                sh 'pwd'
                sh 'ls -la'
                sh 'echo "Current directory contents above"'
            }
        }
        stage('Build') {
            steps {
                sh "${DOCKER_COMPOSE} build"
            }
        }
        stage('Deploy') {
            steps {
                script {
                    echo 'Deploying to PRODUCTION environment...'
                    sh "${DOCKER_COMPOSE} -f docker-compose.yml -p prod up -d"
                }
            }
        }
    }
    post {
        always {
            sh 'docker system prune -f'
        }
    }
}
