const puppeteer = require('puppeteer')

const codeObj = require('./codes')

const loginLink = 'https://www.hackerrank.com/auth/login'
const email = 'xamot46817@stvbz.com'
const password = '222525'; 

 




(async function(){
  try {
    let browserInstance = await puppeteer.launch({
        headless : false,
    
        args :['--start-maximized'],
    
        defaultViewport:null
    })

    let newTab = await browserInstance.newPage();
    await newTab.goto(loginLink)
    await newTab.type("input[id='input-1']" , email , {delay : 50})
    await newTab.type("input[type='password']" , password, {delay : 50})
    await newTab.click('button[data-analytics="LoginPassword"]' , {delay:50})
    await waitAndClick('.topic-card a[data-attr1="algorithms"]' , newTab)
    await waitAndClick('input[value="warmup"]' , newTab)
    let allChallenges = await newTab.$$('.ui-btn.ui-btn-normal.primary-cta.ui-btn-line-primary.ui-btn-styled' , {delay:50})

    console.log('Total questions' , allChallenges.length)


  } catch (error) {
      console.log(error)
  }
})()






// browserOpen.then(function(browserObj){
//     let broswerOpenPromise = browserObj.newPage()
//     return broswerOpenPromise;
// }).then(function(newTab){
//     page = newTab
//     let hackerRankOpenPromise = newTab.goto(loginLink)
//     return hackerRankOpenPromise
// }).then(function(){
//     let emailIsEntered = page.type( )
//     return emailIsEntered
// }).then(function(){
//     let passwordIsEntered = page.type( )
//     return passwordIsEntered
// }).then(function(){
//     let loginButtonClicked = page.click()
//     return loginButtonClicked
// }).then(function(){
//     let clickOnAlgoPromise = waitAndClick()
//     return clickOnAlgoPromise
// }).then(function(){
//     let getToWarmUp = waitAndClick()
//     return getToWarmUp
// }).then(function(){
//     let waitfor3Seconds = page.waitFor(3000)
//     return waitfor3Seconds
// }).then(function(){
//     let allChallengesPromise = page.$$()
//     return allChallengesPromise;
// }).then(function(questionsArr){
//     console.log('number of questions' , questionsArr.length)
//     let questionWillBeSolved = questionSolver(page ,questionsArr[0] ,codeObj.answers[0] )
//     return questionWillBeSolved
    
// })



async function waitAndClick(selector , cPage){
    await cPage.waitForSelector(selector)
    let selectorClicked = cPage.click(selector)
    return selectorClicked
}


// function questionSolver( page ,question , answer ){
//     return new Promise(function(resolve , reject){
//         let questionWillBeClicked = question.click()
//         questionWillBeClicked.then(function(){
//             let EditorInFocusPromise = waitAndClick('.monaco-editor.no-user-select.vs' , page)
//             return EditorInFocusPromise
//         }).then(function(){
//             return waitAndClick('.checkbox-input' , page)
//         }).then(function(){
//             return page.waitForSelector('textarea.custominput' , page)
//         }).then(function(){
//             return page.type('textarea.custominput' , answer , {delay:10})
//         }).then(function(){
//             let ctrlIsPressed = page.keyboard.down('Control')
//             return ctrlIsPressed
//         }).then(function(){
//             let AisPressed = page.keyboard.press('A' , {delay:100})
//             return AisPressed
//         }).then(function(){
//             let XisPressed = page.keyboard.press('X' , {delay:100})
//             return XisPressed
//         }).then(function(){
//             let CtrlisUnPressed = page.keyboard.up('Control')
//             return CtrlisUnPressed
//         }).then(function(){
//             let mainEditorInFocus = waitAndClick('.monaco-editor.no-user-select.vs' , page)
//             return mainEditorInFocus
//         }).then(function(){
//             let ctrlIsPressed = page.keyboard.down('Control')
//             return ctrlIsPressed
//         }).then(function(){
//             let AisPressed = page.keyboard.press('A' , {delay:100})
//             return AisPressed
//         }).then(function(){
//             let VisPressed = page.keyboard.press('V' , {delay:100})
//             return VisPressed
//         }).then(function(){
//             let CtrlisUnPressed = page.keyboard.up('Control')
//             return CtrlisUnPressed
//         }).then(function(){
//             return page.click('.hr-monaco__run-code' , {delay:50})
//         }).then(function(){
//             resolve()
//         }).catch(function(err){
//             reject();
//         })
//     })
// }








