class Helper{
	// retorna um número aleatório entre 0 e ${max};
	// returnRandomNumber(2) pode retornar 0, 1 ou 2;
	static returnRandomNumber(max){ /* 0 a max */
		return Math.floor( Math.random() * (max+1) )
	}
}