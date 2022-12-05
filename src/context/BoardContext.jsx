import React, { createContext, useState } from 'react';
import { projectsData } from './data';
import { v4 as uuidv4 } from 'uuid';
import { useLocalStorage } from '../Hooks/useLocalStorage';

export const BoardContext = createContext();

const BoardContextProvider = ({ children }) => {
    const [projects, setProjects] = useLocalStorage('projects', projectsData);
    const [projectIndex, setProjectIndex] = useState(0);
    const currentProject = projects[projectIndex];

    const changeBoard = (index) => {
        setProjectIndex(index);
    };

    const changeCurrentBoard = (board) => {
        projects[projectIndex].board = board;
        setProjects([...projects]);
    };

    const addNewProject = (title) => {
        if (!title) return;

        const project = {
            title: title,
            id: uuidv4(),
            board: {
                stage1: {
                    name: 'Todo',
                    items: [],
                },
                stage2: {
                    name: 'Doing',
                    items: [],
                },
                stage3: {
                    name: 'Done',
                    items: [],
                },
            },
        };
        setProjects([...projects, project]);
        setProjectIndex(projects.length);
    };

    const createTicket = (ticket) => {
        projects[projectIndex].board.stage1.items.push(ticket);
        setProjects([...projects]);
    };

    const value = {
        projects,
        currentProject,
        changeBoard,
        addNewProject,
        createTicket,
        changeCurrentBoard,
    };

    return <BoardContext.Provider value={value}>{children}</BoardContext.Provider>;
};

export default BoardContextProvider;
