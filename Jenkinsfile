pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/agustin-bergomi/appium-wdio-typescript-new.git'
            }
        }

        stage('Install') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npx wdio run wdio.conf.ts'
            }
        }
    }
}
