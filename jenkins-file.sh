pipeline {
  agent any

  stages {
    stage('Checkout') {
    steps {
        git branch: 'main', url: 'https://github.com/J-DevOp/chatbot-api.git'
      }
    }
    stage('Install Dependencies') {
      steps {
        sh 'npm install'
      }
    }
    stage('Run Tests') {
      steps {
        sh 'npm test'
      }
    }
  }
}
