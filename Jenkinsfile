pipeline {
    agent any
    environment {
        DOCKER_COMPOSE = 'docker compose'
    }
    stages {
        stage('Build') {
            steps {
                sh "${DOCKER_COMPOSE} build"
            }
        }
        stage('Stop Old Containers') {
            steps {
                script {
                    sh '''
                        docker compose -p prod down || true
                        docker rm -f todo-app1 todo-app2 nginx mysql 2>/dev/null || true
                    '''
                }
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
