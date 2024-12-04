pipeline {
  agent any

  stages {
    stage('Clonar repositorio') {
      steps {
        git branch: 'master', url: 'https://github.com/jhon1045/Tarea_TWeb2.git'
      }
    }

    stage('Desplegar contenedor Docker') {
      steps {
        script {
          withCredentials([
            string(credentialsId: 'MONGO_URI', variable: 'MONGO_URI')
          ]) {
            sh 'docker-compose down -v'
            sh 'docker-compose up -d --build'
          }
        }
      }
    }
  }
}
