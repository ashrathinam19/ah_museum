beforeEach(()=>{
    cy.request('https://www.rijksmuseum.nl/api/nl/collection?key=0fiuZFh4').then((response)=>{
        expect(response.status).to.eq(200)
  })
})
describe('Verifies Posts',()=>{ 
  it("Test 1-To test and validate Results by Author",()=>{
        let query_name = "involvedMaker=Rembrandt+van+Rijn"
        let author_name ="Rembrandt van Rijn"
        cy.request('https://www.rijksmuseum.nl/api/nl/collection?key='+Cypress.config('access_key')+'&'+query_name)
        .then((response)=>
        {   
            ///get the number of artobjects returned for the given query search and 
            length =response.body.artObjects.length
            cy.log(length)
            ///loop through all the artobjects and assert for FirstMaker name
            for (let i = 0; i < length; i++){
            //assert the response to check the FirstMaker name
            expect(response.body.artObjects[i].principalOrFirstMaker).to.eq(author_name)
            }
    })
})
  it("Test 2 - To Validate the Object Number Search",()=>{
        let object_number="SK-C-5"
        cy.request('https://www.rijksmuseum.nl/api/nl/collection/'+object_number+'?key='+Cypress.config('access_key'))
        .then((response)=>{
            expect(response.status).to.eq(200)
            cy.log(response.body.artObject['objectNumber'])
            expect(response.body.artObject['objectNumber']).to.eq(object_number)
            ///assert the unit value to be centimeter // trying to demonstrate reaching the inner elements
            length=response.body.artObject['dimensions'].length
            for (let i = 0; i < length; i++){
            ///diminesion may contain 2 values "kg" or "cm" based on the type field. 
            //so looping through elements to check if correct dimension is displayed.
            if (response.body.artObject['dimensions'][i]['type']=='hoogte'||response.body.artObject['dimensions'][i]['type']=='breedte')
            expect(response.body.artObject['dimensions'][i]['unit']).to.eq('cm')
            else if (response.body.artObject['dimensions'][i]['type']=='gewicht')
            expect(response.body.artObject['dimensions'][i]['unit']).to.eq('kg')
            }
        })

  })
})
