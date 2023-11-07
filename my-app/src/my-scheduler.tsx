import React, { FC, useState } from 'react';
import { BryntumScheduler } from '@bryntum/scheduler-react';
import { schedulerConfig } from './SchedulerConfig';

export const MyScheduler: FC = () => {
    const [scheduler, updateScheduler] = useState<BryntumScheduler>();
    console.log(scheduler);
    return (
        <BryntumScheduler
            ref={updateScheduler}
            {...schedulerConfig}
        />
    );
}