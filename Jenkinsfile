def createVersion() {
    // 定义一个版本号作为当次构建的版本，输出结果 20191210175842_69
    return new Date().format('yyyyMMddHHmmss') + "_${env.BUILD_ID}"
}
pipeline {

  agent any
  environment {
        _version = createVersion()
    }
    // 拉取代码
  stages {
    stage('GetCode') {
      when { environment name: 'action', value: 'release' }
      steps {
        println("your choices are Branch:${branch} action:${action} version:1.0 ! ")
        sleep 3
      }
    }

    // 代码编译
    stage('Maven Build') {
        when { environment name: 'base_language', value: 'java' }
        steps {
        println("###################################################")
        println("当前使用maven打包")
        println("###################################################")
          sh '''
          mvn clean package -P ${base_env}
          '''
        }
    }

    stage('php Build') {
        when { environment name: 'base_language', value: 'php' }
        steps {
        println("###################################################")
        println("当前使用tar打包")
        println("###################################################")
          sh '''
          '''
        }
    }

    stage('npm Build') {
        when { environment name: 'base_language', value: 'vue' }
        steps {
        println("###################################################")
        println("当前npm打包")
        println("###################################################")
          sh '''
          cnpm install
          ${build_base}
          '''
        }
    }


    // 项目打包成镜像并推送到仓库
    stage('Build and Push Image') {
      when { environment name: 'action', value: 'release' }
      steps {
      sh '''
        cd /home/docker-file/${base_env}/${JOB_NAME}
        bash jra.sh ${JOB_NAME}  ${base_env} ${POST} ${base_env}-${APP_NAME} ${ck_name}:${_version}
        docker build . -t  ${ck_name}:${_version}
        docker push ${ck_name}:${_version}
        docker rmi -f ${ck_name}:${_version}
        '''
      println("###################################################")
      println("当前镜像版本 ${ck_name}:${_version}")
      println("当前应用名字 ${base_env}-${APP_NAME}")
      println("###################################################")
      }
    }

    // 部署到K8S主机
    stage('Deploy to k8s') {
      when { environment name: 'action', value: 'release' }
      steps {
        sh '''
        bash  /home/docker-file/${base_env}/${JOB_NAME}/k8s.sh ${ck_name}:${_version} ${base_env} ${APP_NAME} ${JOB_NAME}
        '''}
    }

   // K8S紧急时回滚
    stage('Rollback to k8s') {
          when { environment name: 'action', value: 'rollback' }
          steps {
            echo "k8s images is rolled back! "
            sh '''
            bash /home/docker-file/${base_env}/${JOB_NAME}/k8s_rollback.sh  ${base_env} ${APP_NAME} ${ck_name}:${IMAGES_TAG}
            '''
            println("###################################################")
            println("  回滚成功！！当前镜像版本 ${ck_name}:${IMAGES_TAG}")
            println("###################################################")
          }
       }

  }
}