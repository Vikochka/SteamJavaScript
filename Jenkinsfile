node {
  stage('SCM') {
    checkout scm
  }
  stage('SonarQube Analysis') {
    def scannerHome = tool 'SONAR_RUNNER_HOME';
    withSonarQubeEnv() {
      bat "${scannerHome}/bin/sonar-scanner"
    }
  }
  stage('Build') {
           git 'https://github.com/Vikochka/SteamJavaScript.git'
           bat "npx wdio run ./wdio.conf.js"
  }
}