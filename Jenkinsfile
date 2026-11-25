
pipeline {
    agent {
        label 'dragon'
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Check Tools') {
            steps {
                sh 'node --version'
                sh 'npm --version'
                sh 'git --version'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build React App') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Verify Build') {
            steps {
                sh 'test -f dist/index.html'
                sh 'ls -lh dist'
            }
        }
    }

    post {
        success {
            echo 'Portfolio React build completed successfully!'
        }

        failure {
            echo 'Portfolio CI pipeline failed. Check console output.'
        }
    }
}

