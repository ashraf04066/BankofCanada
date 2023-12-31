// material-ui
import { Grid } from '@mui/material';

// project imports
import Loader from 'components/Loader';
import AccountBalance from './AccountBalance';
import TotalSpending from './TotalSpending';
import LatestExpense from './LatestExpense';
import LatestTransfer from './LatestTransfer';
import { gridSpacing } from 'assets/data/constant';
import SpendingBarChart from './SpendingBarChart';
import { useGetBalanceQuery, useGetExpenseQuery, useGetTransferQuery } from 'app/features/user/userApiSlice';
import config from 'assets/data/config';

const Dashboard = () => {
    let {
        data: accountBalance,
        isLoading: isBalanceLoading,
        isSuccess: isBalanceSuccess,
        isError: isBalanceError,
        error: balanceError
    } = useGetBalanceQuery('accountBalance', {
        pollingInterval: config.pollingInterval,
        refetchOnFocus: true,
        refetchOnMountOrArgChange: true
    });

    let {
        data: expenseHistory,
        isLoading: isExpenseLoading,
        isSuccess: isExpenseSuccess,
        isError: isExpenseError,
        error: expenseError
    } = useGetExpenseQuery('expenseHistory', {
        pollingInterval: config.pollingInterval,
        refetchOnFocus: true,
        refetchOnMountOrArgChange: true
    });

    let {
        data: transferHistory,
        isLoading: isTransferLoading,
        isSuccess: isTransferSuccess,
        isError: isTransferError,
        error: transferError
    } = useGetTransferQuery('transferHistory', {
        pollingInterval: config.pollingInterval,
        refetchOnFocus: true,
        refetchOnMountOrArgChange: true
    });

    let content;
    if (isBalanceLoading || isExpenseLoading || isTransferLoading) content = <Loader />;

    if (isBalanceError || isExpenseError || isTransferError) {
        content = (
            <p className="errmsg">
                {balanceError?.data?.message} {expenseError?.data?.message} {transferError?.data?.message}
            </p>
        );
    }
    if (isBalanceSuccess && isExpenseSuccess && isTransferSuccess)
        content = (
            <Grid container spacing={gridSpacing}>
                <Grid item xs={12}>
                    <Grid container spacing={gridSpacing}>
                        <Grid item lg={4} md={6} sm={6} xs={12}>
                            <AccountBalance
                                accountBalance={accountBalance}
                                expenseHistory={expenseHistory}
                                transferHistory={transferHistory}
                            />
                        </Grid>
                        <Grid item lg={4} md={6} sm={6} xs={12}>
                            <TotalSpending expenseHistory={expenseHistory} transferHistory={transferHistory} />
                        </Grid>
                        <Grid item lg={4} md={12} sm={12} xs={12}>
                            <Grid container spacing={gridSpacing}>
                                <Grid item sm={6} xs={12} md={6} lg={12}>
                                    <LatestExpense expenseHistory={expenseHistory} />
                                </Grid>
                                <Grid item sm={6} xs={12} md={6} lg={12}>
                                    <LatestTransfer transferHistory={transferHistory} />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={gridSpacing}>
                        <Grid item xs={12} md={12}>
                            <SpendingBarChart expenseHistory={expenseHistory} transferHistory={transferHistory} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        );
    return content;
};

export default Dashboard;
