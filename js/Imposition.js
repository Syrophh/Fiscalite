function recupMontantImposition(revenus){
    const t1 = 10777;
    const t2 = 27478;
    const t3 = 78570;
    const t4 = 168994;
    
    if (revenus <= t1) {
        return 0;
    } 
    
    else if (revenus <= t2){
        return ((revenus - t1 ) / 100 * 11);
    } 
    
    else if (revenus <= t3){
        let impot = ((revenus - t2 ) * 0.3) + ((t2 - t1 ) * 0.11);
        return impot.toFixed(2);
    } 
    
    else if (revenus <= t4){
        let impot = ((revenus - t3 ) * 0.41) + ((t3 - t2 ) * 0.3) + ((t2 - t1 ) * 0.11);
        return impot.toFixed(2); 
    }
    
    else if (revenus > t4){
        let impot = ((revenus - t4) * 0.45) + ((t4 - t3 ) * 0.41) + ((t3 - t2 ) * 0.3) + ((t2 - t1 ) * 0.11);
        return impot.toFixed(2); 
    }
}