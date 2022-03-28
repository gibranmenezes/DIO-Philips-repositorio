class ContaBancaria {
    constructor(agencia, numero, tipo){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this.saldo = 0;
        
    }

    get saldo(){
        return this._saldo;
    }

    set saldo(valor){
        this._saldo = valor;
    }

    sacar(valor){
        try{
            if (valor >= this.saldo)
              throw new Error('Saldo insuficiente');
            
        } catch (e){
            console.log(e.message);
        }
        return this.saldo = this._saldo - valor;
    }

    depositar(valor){
        this.saldo = this._saldo + valor;

        return this._saldo;
    }

}

class ContaCorrente extends ContaBancaria {
    constructor(agencia, numero, cartaoCredito){
        super(agencia, numero);
        this.tipo = 'conta corrente';
        this.cartaoCredito = cartaoCredito;
    }

    get cartaoCredito(){
        return this._cartaoCredito;
    }

    set cartaoCredito(valor){
        this._cartaoCredito = valor;
    }

}

class ContaPoupanca extends ContaBancaria {
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = 'poupança';
       
    }
}

class ContaUniversitaria extends ContaBancaria {
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = 'universitária';
       
    }

    sacar(valor){
        try{
            
            if(valor > 500)
            throw new Error('Valor excede ao limite permitido');
            
            if (valor >= this.saldo)
              throw new Error('Saldo insuficiente');
        
        return this.saldo = this._saldo - valor;
            
        } catch (e){
            console.log(e.message);
        }
        
       
    }
}
