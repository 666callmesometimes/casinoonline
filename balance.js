// balance.js

// Funkcja do pobrania aktualnego balansu
function getBalance() {
    return parseFloat(localStorage.getItem('balance') || '0');
}

// Funkcja do ustawienia nowego balansu
function setBalance(amount) {
    localStorage.setItem('balance', amount.toFixed(2));
    updateBalanceDisplay();
}

// Funkcja do zaktualizowania wyświetlanego balansu na stronie
function updateBalanceDisplay() {
    const balanceDisplay = document.getElementById('balance-display');
    if (balanceDisplay) {
        balanceDisplay.innerText = `${getBalance().toFixed(2)}`;
    }
}

// Funkcja do dodania do balansu
function addBalance(amount) {
    setBalance(getBalance() + amount);
}

// Funkcja do odjęcia od balansu
function subtractBalance(amount) {
    setBalance(getBalance() - amount);
}

// Inicjalizacja balansu przy starcie
document.addEventListener('DOMContentLoaded', () => {
    if (!localStorage.getItem('balance')) {
        setBalance(0);  // Możesz ustawić początkowy balans tutaj, jeśli jest wymagany
    }
    updateBalanceDisplay();
});

// Synchronizacja balance pomiędzy kartami
window.addEventListener('storage', (event) => {
    if (event.key === 'balance') {
        updateBalanceDisplay();
    }
});
