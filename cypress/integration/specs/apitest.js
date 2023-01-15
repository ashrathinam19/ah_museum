describe('Verifies Posts',()=>{ 
    it("basic_check",() =>{
        cy.request('https://www.rijksmuseum.nl/api/nl/collection/SK-C-5?key=0fiuZFh4').then((response)=>{
            expect(response.status).to.eq(200)     
    })
})
})