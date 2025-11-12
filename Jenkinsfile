pipeline {
    agent any

    environment {
        DOCKER_COMPOSE = 'docker compose'
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: "${env.BRANCH_NAME}", url: 'https://github.com/Noc706/todo.git'
            }
        }

        stage('Build') {
            steps {
                sh "${DOCKER_COMPOSE} build"
            }
        }

        stage('Deploy') {
            when {
                anyOf {
                    branch 'test'
                    branch 'main'
                    branch 'production'
                }
            }
            steps {
                script {
                    if (env.BRANCH_NAME == 'test') {
                        echo 'Deploying to TEST environment...'
                        sh "${DOCKER_COMPOSE} -f docker-compose.yml -p test up -d"
                    } else {
                        echo 'Deploying to PRODUCTION environment...'
                        sh "${DOCKER_COMPOSE} -f docker-compose.yml -p prod up -d"
                    }
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
