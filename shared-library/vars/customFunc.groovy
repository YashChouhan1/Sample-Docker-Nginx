def call() {
   node {
      sh '''
         echo "This is custom file."
         echo "Hello world"
      '''
   }
}
