export class UploadPage{

    AudioUploadmp3(){

        cy.get('._action_button_gzio9_33').click()
        cy.get('[type= "file"]').selectFile('cypress/Audio/Test1.mp3', {force: true})
        cy.get('[type="button"]').click()
    }

    AudioUploadmp4(){
        cy.get('._action_button_gzio9_33').click()
        cy.get('[type= "file"]').selectFile('cypress/Audio/Test2.mp4', {force: true})
        cy.get('[type="button"]').click()
    }

    AudioUploadWav(){
        cy.get('._action_button_gzio9_33').click()
        cy.get('[type= "file"]').selectFile('cypress/Audio/Test4.wav', {force: true})
        cy.get('[type="button"]').click()
    }

    AudioUploadOpus(){
        cy.get('._action_button_gzio9_33').click()
        cy.get('[type= "file"]').selectFile('cypress/Audio/Test3.opus', {force: true})
        cy.get('[type="button"]').click()
    }

}

export const onUploadPage = new UploadPage()