import React, { FC, useRef } from 'react';
import { BryntumScheduler } from '@bryntum/scheduler-react';
import { schedulerConfig } from './SchedulerConfig';

export const MyScheduler: FC = () => {
    const scheduler = useRef<BryntumScheduler>(null);
    return (
        <BryntumScheduler
            ref = {scheduler}
            {...schedulerConfig}
        />
    );
}