describe('Verifies Posts',()=>{ 
    it("basic_check",() =>{
        cy.request('https://www.rijksmuseum.nl/api/nl/collection?key=0fiuZFh4').then((response)=>{
            expect(response.status).to.eq(200)     
    })
})
  it("To test and validate Results by Author",()=>{
        cy.request('https://www.rijksmuseum.nl/api/nl/collection?key=0fiuZFh4&involvedMaker=Rembrandt+van+Rijn')
        .then((response)=>
        {   
            ///get the number of artobjects returned for the given query search and 
            length =response.body.artObjects.length
            cy.log(length)
            ///loop through all the artobjects and assert for FirstMaker name
            for (let i = 0; i < length; i++){
            //assert the response to check the FirstMaker name
            expect(response.body.artObjects[i].principalOrFirstMaker).to.eq("Rembrandt van Rijn")
            }
    })
})


 })