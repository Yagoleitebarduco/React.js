const ProductFilters = ({setFemaleProducts}) =>{
    return (
        <section className="flex justify-center items-center py-8">
            <input onClick={() => setFemaleProducts(null)} className="hidden" type="radio" name="filter-selection" id="filter-0" />
            <label className="rounded-s-lg bg-slate-950 hover:bg-slate-700 p-2 text-sm text-slate-100 cursor-pointer" htmlFor="filter-0">Todos</label>
            
            <input onClick={() => setFemaleProducts(false)} className="hidden" type="radio" name="filter-selection" id="filter-1" />
            <label className=" bg-slate-950 hover:bg-slate-700 p-2 text-sm text-slate-100 cursor-pointer" htmlFor="filter-1">Masculino</label>

            <input onClick={() => setFemaleProducts(true)} className="hidden" type="radio" name="filter-selection" id="filter-2" />
            <label className="rounded-e-lg bg-slate-950 hover:bg-slate-700 p-2 text-sm text-slate-100 cursor-pointer" htmlFor="filter-2">Feminino</label>

        </section>
    )
}

export default ProductFilters