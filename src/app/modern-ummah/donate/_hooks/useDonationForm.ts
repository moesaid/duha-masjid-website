import { useState } from 'react';

export type DonationType = 'onetime' | 'monthly' | 'zakat';
export type SelectedAmount = number | 'custom';

export function useDonationForm() {
    const [donationType, setDonationType] = useState<DonationType>('onetime');
    const [selectedAmount, setSelectedAmount] = useState<SelectedAmount>(100);
    const [customAmount, setCustomAmount] = useState('');
    const [selectedFund, setSelectedFund] = useState('general');

    const handleAmountSelect = (amount: number) => {
        setSelectedAmount(amount);
        setCustomAmount('');
    };

    const handleCustomAmountChange = (val: string) => {
        setCustomAmount(val);
        setSelectedAmount('custom');
    };

    const handleDonationTypeChange = (type: DonationType) => {
        setDonationType(type);
    };

    const handleFundChange = (fund: string) => {
        setSelectedFund(fund);
    };

    return {
        state: {
            donationType,
            selectedAmount,
            customAmount,
            selectedFund
        },
        actions: {
            setDonationType: handleDonationTypeChange,
            selectAmount: handleAmountSelect,
            updateCustomAmount: handleCustomAmountChange,
            selectFund: handleFundChange
        }
    };
}
